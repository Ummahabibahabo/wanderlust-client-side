import { DestinationDataType } from "@/component/typs";
import DeleteDestinationDialogPage from "@/components/DeleteDestinationDialog";
import EditDestinationDialog from "@/components/ui/EditDestinationDialog";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaLeaf,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

interface DestinationDetailsPageProps {
  params: Promise<{ destinationId: string }>;
}

export default async function DestinationDetailsPage({
  params,
}: DestinationDetailsPageProps) {
  const { destinationId } = await params;

  const res = await fetch(
    `http://localhost:5000/destination/${destinationId}`,
    { cache: "no-store" }
  );

  const destinationData: DestinationDataType = await res.json();
  console.log("Destination data",destinationData)
  const destination = destinationData.user;

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#15A1BF]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-800">
            {destination.destinationName}
          </span>
        </div>

        {/* Main Destination */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Destination Image */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-lg md:min-h-[480px]">
            <Image
              src={destination.imageUrl}
              alt={destination.destinationName}
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute left-5 top-5">
              <span className="flex items-center gap-2 rounded-full bg-[#05893E] px-4 py-2 text-sm font-semibold text-white shadow">
                <FaLeaf />
                {destination.category}
              </span>
            </div>
          </div>

          {/* Destination Information */}
          <div className="flex flex-col justify-center rounded-3xl bg-white p-6 shadow-sm md:p-9">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {destination.destinationName}
            </h1>

            <p className="mt-4 flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-[#15A1BF]" />
              {destination.country}
            </p>

            {/* Duration and Price */}
            <div className="mt-7 flex flex-wrap items-center gap-6 border-y border-gray-100 py-5">
              <div className="flex items-center gap-3">
                <FaClock className="text-xl text-[#15A1BF]" />
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-800">
                    {destination.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-2xl text-[#15A1BF]" />
                <div>
                  <p className="text-xs text-gray-500">Package Price</p>
                  <p className="text-2xl font-bold text-[#05893E]">
                    ${destination.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-600">
              {destination.description}
            </p>

            {/* Edit and Delete Buttons */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              <EditDestinationDialog destinationData={destinationData}
              
                destination={destination}></EditDestinationDialog>

              <DeleteDestinationDialogPage destinationData={destinationData}
              
                destination={destination}></DeleteDestinationDialogPage>
            </div>

            {/* Book Now Button */}
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#15A1BF] px-6 py-4 font-bold text-white shadow-md transition hover:bg-[#1189A3]"
            >
              <FaCalendarAlt />
              Book Now
              <FaArrowRight />
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Your next adventure starts here!
            </p>
          </div>
        </div>

        {/* About and Quick Info */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* About Section */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">
              About This Destination
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              {destination.description}
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F0F5F0] p-5 text-center">
                <FaGlobe className="mx-auto text-2xl text-[#05893E]" />
                <p className="mt-3 font-semibold text-gray-800">Explore</p>
                <p className="mt-1 text-sm text-gray-500">
                  Beautiful places
                </p>
              </div>

              <div className="rounded-2xl bg-[#F0F5F0] p-5 text-center">
                <FaMapMarkerAlt className="mx-auto text-2xl text-[#05893E]" />
                <p className="mt-3 font-semibold text-gray-800">Discover</p>
                <p className="mt-1 text-sm text-gray-500">Local culture</p>
              </div>

              <div className="rounded-2xl bg-[#F0F5F0] p-5 text-center">
                <FaCalendarAlt className="mx-auto text-2xl text-[#05893E]" />
                <p className="mt-3 font-semibold text-gray-800">Plan</p>
                <p className="mt-1 text-sm text-gray-500">Your next trip</p>
              </div>
            </div>

            {/* Trip Highlights */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Trip Highlights
              </h2>

              <ul className="mt-5 space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#05893E]">✓</span>
                  Explore beautiful destinations and famous landmarks.
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#05893E]">✓</span>
                  Discover local traditions, culture, and food.
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#05893E]">✓</span>
                  Enjoy memorable experiences throughout your trip.
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#05893E]">✓</span>
                  Capture beautiful moments at your destination.
                </li>
              </ul>
            </div>
          </section>

          {/* Quick Info */}
          <aside className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Info</h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-gray-500">
                  <FaGlobe className="text-[#15A1BF]" />
                  Country
                </span>
                <span className="text-right font-semibold text-gray-800">
                  {destination.country}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-gray-500">
                  <FaClock className="text-[#15A1BF]" />
                  Duration
                </span>
                <span className="text-right font-semibold text-gray-800">
                  {destination.duration}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-gray-500">
                  <FaLeaf className="text-[#15A1BF]" />
                  Category
                </span>
                <span className="text-right font-semibold capitalize text-gray-800">
                  {destination.category}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-gray-500">
                  <FaMoneyBillWave className="text-[#15A1BF]" />
                  Price
                </span>
                <span className="font-bold text-[#05893E]">
                  ${destination.price}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-gray-500">
                  <FaCalendarAlt className="text-[#15A1BF]" />
                  Departure
                </span>
                <span className="text-right font-semibold text-gray-800">
                  {destination.departureDate}
                </span>
              </div>
            </div>

            {/* Adventure Card */}
            <div className="mt-8 rounded-2xl bg-[#F0F5F0] p-5">
              <h3 className="font-bold text-gray-900">
                Ready for an Adventure?
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Discover new places and create unforgettable memories.
              </p>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#05893E] px-4 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <FaCalendarAlt />
                Book Now
                <FaArrowRight />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}