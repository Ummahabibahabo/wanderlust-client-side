
"use client"

import React from "react"

export default function AddDestinationPage() {
    const handleAddButton = async(e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
      console.log(user)
      const res = await fetch("http://localhost:5000/add-destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
          body: JSON.stringify({ user }),
      })
      const data = await res.json();
      console.log(data)
      
    }
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Add New Travel Package
      </h1>

      <form onSubmit={handleAddButton} className="mt-8">
        <fieldset className="border-base-300 rounded-box max-w-4xl mx-auto border p-6 space-y-3 bg-white">

          <label className="label font-bold text-gray-700">
            Destination Name
          </label>
          <input name="destinationName"
            type="text"
            className="input w-full bg-[#F8FAFC]"
            placeholder="Enter your destination name"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full space-y-3">
              <label className="label font-bold text-gray-700">
                Country
              </label>
              <input name="country"
                type="text"
                className="input w-full bg-[#F8FAFC]"
                placeholder="Enter your destination country name"
              />
            </div>

            <div className="flex flex-col w-full space-y-3">
              <label className="label font-bold text-gray-700">
                Category
              </label>
              <select name="category"
                className="select w-full bg-[#F8FAFC]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="adventure">Adventure</option>
                <option value="historical">Historical</option>
                <option value="nature">Nature</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full space-y-3">
              <label className="label font-bold text-gray-700">
                Price (USD)
              </label>
              <input name="price"
                type="number"
                className="input w-full bg-[#F8FAFC]"
                placeholder="e.g., 1299"
              />
            </div>

            <div className="flex flex-col w-full space-y-3">
              <label className="label font-bold text-gray-700">
                Duration
              </label>
              <input name="duration"
                type="text"
                className="input w-full bg-[#F8FAFC]"
                placeholder="e.g., 7 Days/6 Nights"
              />
            </div>
          </div>

          <label className="label font-bold text-gray-700">
            Departure Date
          </label>
          <input name="departureDate"
            type="date"
            className="input w-full bg-[#F8FAFC]"
          />

          <label className="label font-bold text-gray-700">
            Image URL
          </label>
          <input name="imageUrl"
            type="url"
            className="input w-full bg-[#F8FAFC]"
            placeholder="https://example.com/image.jpg"
          />

          <label className="label font-bold text-gray-700">
            Description
          </label>
          <textarea name="description"
            className="textarea w-full bg-[#F8FAFC] min-h-32"
            placeholder="Describe the travel experience..."
          />

              </fieldset>
               <div className="flex flex-wrap gap-5 justify-end mt-5 max-w-4xl mx-auto">
        <button
          type="button"
          className="px-5 py-2 rounded-xl border border-red-400 text-red-500 hover:bg-red-50 transition"
        >
          Delete
        </button>

        <button
          type="submit"
          className="bg-[#15A1BF] text-white px-5 py-2 rounded-xl hover:bg-[#1189A3] transition"
        >
          Add Travel Package
        </button>
      </div>
      </form>

     
    </div>
  )
}
