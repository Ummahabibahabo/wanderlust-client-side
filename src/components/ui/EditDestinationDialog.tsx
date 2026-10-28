"use client";

import { DestinationDataType } from "@/component/typs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaEdit, FaSave } from "react-icons/fa";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaImage,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
interface EditDestinationDialogProps{
  destinationData: DestinationDataType;
    destination:DestinationDataType["user"]
}
export default function EditDestinationDialog({ destination,destinationData }:EditDestinationDialogProps) {
     const handleEditButton = async(e:React.SubmitEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const user = Object.fromEntries(formData.entries());
          console.log(user)
          const res = await fetch(`http://localhost:5000/destination/${destinationData._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json", 
            },
              body: JSON.stringify({ user }),
          })
          const data = await res.json();
          console.log(data)
          
        }
  return (
    <Dialog>
      <DialogTrigger>
        <button
          type="button"
          className="group flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3.5 font-semibold text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg"
        >
          <FaEdit className="text-lg transition-transform duration-300 group-hover:rotate-[-8deg]" />
          Edit
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto border-0 bg-white p-0 shadow-2xl sm:max-w-2xl">
        {/* Header */}
        <div className="rounded-t-lg bg-gradient-to-r from-[#05893E] to-[#15A1BF] px-6 py-6 text-white sm:px-8">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <FaEdit className="text-xl" />
              </span>
              Update Travel Package
            </DialogTitle>

            <DialogDescription className="pt-2 text-sm leading-6 text-white/90">
              Update your travel package information using the form below.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleEditButton} className="space-y-5 p-5 sm:p-8">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaMapMarkerAlt className="text-[#05893E]" />
              Destination Name
            </label>

            <input
              name="destinationName"
                          type="text"
                          defaultValue={destination.destinationName}
              placeholder="Enter destination name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FaGlobe className="text-[#05893E]" />
                Country
              </label>

              <input
                name="country"
                              type="text"
                              defaultValue={destination.country}
                placeholder="Enter country name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Category
              </label>

              <select
                name="category"
                defaultValue={destination.category}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="adventure">Adventure</option>
                <option value="historical">Historical</option>
                <option value="nature">Nature</option>
              </select>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FaDollarSign className="text-[#05893E]" />
                Price (USD)
              </label>

              <input
                name="price"
                              type="number"
                              defaultValue={destination.price}
                min="0"
                placeholder="e.g. 1299"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FaClock className="text-[#05893E]" />
                Duration
              </label>

              <input
                name="duration"
                              type="text"
                              defaultValue={destination.duration}
                placeholder="e.g. 7 Days / 6 Nights"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaCalendarAlt className="text-[#05893E]" />
              Departure Date
            </label>

            <input
              name="departureDate"
                          type="date"
                          defaultValue={destination.departureDate}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaImage className="text-[#05893E]" />
              Image URL
            </label>

            <input
              name="imageUrl"
                          type="url"
                          defaultValue={destination.imageUrl}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
                          name="description"
                          defaultValue={destination.description}
              rows={4}
              placeholder="Describe the travel experience..."
              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-[#15A1BF] focus:bg-white focus:ring-4 focus:ring-[#15A1BF]/10"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#05893E] to-[#15A1BF] px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaSave />
              Update Package
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}