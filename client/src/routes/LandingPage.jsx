import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocalize } from '~/hooks'; // Adjust this import based on your project structure

function LandingPage() {
  const localize = useLocalize(); // Using the localization hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cvFile, setCvFile] = useState(null);

  const handleCvFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const onSubmit = (data) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log('Submitting', { cvFile, linkedInProfile: data.linkedInProfile });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white pt-6 sm:pt-0">
      <div className="w-full max-w-md overflow-hidden bg-white px-6 py-4 sm:rounded-lg">
        <h1 className="mb-4 text-center text-3xl font-semibold">
          {localize('com_steps_welcome_header')}
        </h1>
        <p className="text-center">{localize('com_steps_welcome_instructions')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-4">
            <label htmlFor="cvUpload" className="block text-sm font-medium text-gray-700">
              {localize('com_steps_welcome_cv_upload_label')}
            </label>
            <input
              type="file"
              id="cvUpload"
              {...register('cvFile', {
                required: localize('com_steps_welcome_cv_upload_required'),
              })}
              onChange={handleCvFileChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            />
            {errors.cvFile && (
              <span className="mt-1 text-sm text-red-600">{errors.cvFile.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="linkedInProfile" className="block text-sm font-medium text-gray-700">
              {localize('com_steps_welcome_linkedin_label')}
            </label>
            <input
              type="text"
              id="linkedInProfile"
              {...register('linkedInProfile', {
                required: localize('com_steps_welcome_linkedin_required'),
                pattern: {
                  value: /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
                  message: localize('com_steps_welcome_linkedin_invalid'),
                },
              })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            />
            {errors.linkedInProfile && (
              <span className="mt-1 text-sm text-red-600">{errors.linkedInProfile.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full transform rounded-md bg-green-500 px-4 py-3 tracking-wide text-white transition-all duration-300 hover:bg-green-600 focus:bg-green-600 focus:outline-none"
          >
            {localize('submit_button')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
