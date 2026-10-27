
import type { DestinationDataType } from "@/component/typs";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";

interface DestinationCardProps {
  data: DestinationDataType[];
}

export default function DestinationCardPage({
  data,
}: DestinationCardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div
          key={item._id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Destination Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
  src={item.user.imageUrl}
  alt={item.user.destinationName}
  fill
  unoptimized
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition duration-500 group-hover:scale-110"
/>

            <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium capitalize text-green-700 shadow">
              <MdCategory size={17} />
              {item.user.category}
            </span>
          </div>

          {/* Destination Details */}
          <div className="space-y-4 p-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800 transition group-hover:text-green-600">
                {item.user.destinationName}
              </h2>

              <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-green-600" />
                {item.user.country}
              </p>
            </div>

            <p className="line-clamp-2 text-sm leading-6 text-gray-600">
              {item.user.description}
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-500">Starting from</p>
                <p className="text-2xl font-bold text-green-600">
                  ${item.user.price}
                </p>
              </div>

              <div>
                <p className="mb-1 flex items-center justify-end gap-1 text-xs text-gray-500">
                  <FaClock />
                  Duration
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {item.user.duration}
                </p>
              </div>
            </div>

            <Link href={`destinations/${item._id}`}>
                           <div className="flex">
  <button className="group flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:scale-95">
    Book Now
    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
  </button>
</div>
            </Link>
            
          </div>
        </div>
      ))}
    </div>
  );
}
