---
title: 📝 Documentation Guidelines
description: Learn how to write and format documentation for LibreChat.
weight: -9
---

# Documentation Guidelines

This document explains how to write and format documentation for LibreChat.

## New Documents

- Use lowercase letters and underscores to name new documents (e.g. `documentation_guidelines.md`).
- For new features, create new documentation and place it in the relevant folder/sub-folder under `../docs`.
  - If the feature adds new functionality, add it to the feature section of the main `README.md` as well as in `../docs/index.md`.
- When you create a new document, **you need to add it to two table of contents:**
  - in `README.md`
  - and in the `index.md` file in the folder where your doc is located

## Markdown Formatting

- Use `#`, `##`, and `###` for headings and subheadings.
- Use `#` for the title of the document.
- Use `##` for the main sections of the document.
- Use `###` for the sub-sections within a section.
- Use `**` to make text **bold** to highlight important information (do not use in place of a heading).
- Use relative paths for links to other documents.
- You can use HTML to add more features to a document.
- By default the title indexed by mkdocs will be the first heading. You can override this by adding metadata at the top of your document:

```bash
---
title: Document Title
description: This description will be used in social cards
weight: 0
---
```

- Setting the weight in the document metadata will influence its position in the table of contents. Lowest weight are placed first. Not setting it will default to `0`. When multiple docs have the same weight it sorts in alphabetical order.

## Documentations Best practice

### Introduction Section

Offer a straightforward and succinct overview in your documentation's introduction. Clearly identify the intended audience and the document's purpose. Adhere to the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) by maintaining simplicity; focus on documenting one concept at a time. If the subject matter is complex, break it down into more digestible, standalone parts for easier comprehension.

### Simplicity and Clarity

- Ensure your documentation is straightforward and clear, especially when explaining complex features or technical requirements.

### Step-by-Step Guide

- **Sequential Order:** List all steps in the order they need to be performed. On one hand, avoid skipping steps or assuming prior knowledge, on the other hand don't assume that all the readers read it step by step, if possible add to the troubleshooting instructions to go back to previous steps when applicable.
- **Details:** Include all necessary information for each step, such as commands to run, locations of files, and expected outcomes, simple explanation along with links for more detailed information.
- **Verification Steps:** Suggest ways users can verify they've completed each step correctly before moving on.
- **Troubleshooting Tips:** Provide solutions or workarounds for common issues that may arise during the setup or configuration process.

### Use Cases and Examples

- First time users, people with less background on a specific technology, developer setup and deployment setup are different use cases. It is better to create a section or page for each with links from one to another.
- **Variations:** Show different ways a feature can be used, catering to various user needs, use case or preferences.

## Configuration Details

- **Options and Parameters:** List all available configuration options, their acceptable values, and default settings.
- **Impact Analysis:** Explain what each configuration setting does and how changing it affects the application’s behavior.
- **Best Practices:** Offer recommendations for optimal configuration settings based on different usage scenarios or environments.
- **Common Configurations:** Describe typical configurations for various common scenarios to help users get started quickly.

## Feature Documentation

- Document each major feature of the application.
- Provide examples and use cases.

## Testing

- Explain how to run tests.
- Describe how contributors can add new tests.

## Frequently Asked Questions

- Address common questions or issues that new users might encounter.

Remember, good documentation is key to a successful open-source project. It not only helps new users to get started but also encourages other developers to contribute to your project.

## Important Notes

- **⚠️Keep it organized and structured⚠️**
- Do not add unrelated information to an existing document. Create a new one if needed.
- All assets should be uploaded in the document from GitHub's webui
- **Before submitting a PR, double-check on GitHub that everything is properly displayed and that all links work correctly.**

![image](https://github.com/danny-avila/LibreChat/assets/32828263/4f138ab4-31a5-4fae-a459-5335e5ff25a8)

## Tips

- You can check the code of this document to see how it works.
- You can run MKDocs locally to test bigger documentation changes
- You can ask GPT or Bing for help with proofreading, syntax, and markdown formatting.

---

### Example of HTML image embedding:

<p align="center">
  <a href="https://discord.librechat.ai">
    <img src="https://github.com/danny-avila/LibreChat/assets/32828263/45890a7c-5b8d-4650-a6e0-aa5d7e4951c3" height="128" width="128">
  </a>
  <a href="https://librechat.ai">
    <h3 align="center">LibreChat</h3>
  </a>
</p>
