import os

# Base directory containing all subfolders with Markdown files
base_dir = "../"

# Directories to exclude from the search
exclude_dirs = {"../src", "../dev"}


def extract_headings_from_file(file_path):
    headings = []
    with open(file_path, "r", encoding="utf-8") as file:
        for line in file:
            if line.startswith("#"):
                # Remove '#' characters and strip whitespace
                clean_line = line.replace("#", "").strip()
                headings.append(clean_line)
    return headings


def create_site_wide_toc(base_dir, exclude_dirs):
    site_wide_toc = []
    for root, dirs, files in os.walk(base_dir, topdown=True):
        # Exclude specified directories
        dirs[:] = [d for d in dirs if os.path.join(root, d).replace("\\", "/") not in exclude_dirs]
        print(f"Searching in directory: {root}")  # Debug print

        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")  # Debug print
                headings = extract_headings_from_file(file_path)
                if headings:
                    # Append a link to the file in the TOC
                    relative_file_path = os.path.relpath(file_path, start=base_dir).replace("\\", "/")
                    site_wide_toc.append(f"* [{relative_file_path}](/{relative_file_path})")
                    # Append headings under the file link
                    for heading in headings:
                        site_wide_toc.append(f"    * {heading}")
                else:
                    print(f"No headings found in: {file_path}")  # Debug print
            else:
                print(f"Skipped non-Markdown file: {file}")  # Debug print
    if not site_wide_toc:
        print("No Markdown files found with headings.")  # Debug print
    return site_wide_toc


def save_toc_to_file(toc, file_name="site_wide_toc.md"):
    if toc:  # Check if TOC is not empty
        with open(file_name, "w", encoding="utf-8") as file:
            for line in toc:
                file.write(line + "\n")
        print(f"TOC written to {file_name}")  # Debug print
    else:
        print("TOC is empty, no file written.")  # Debug print


# Generate and save the site-wide TOC
toc = create_site_wide_toc(base_dir, exclude_dirs)
save_toc_to_file(toc)
