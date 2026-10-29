"use client"
import { DestinationDataType } from "@/component/typs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { redirect } from "next/navigation";

import { FaTrashAlt } from "react-icons/fa";
interface DeleteDestinationDialogPageProps{
    destination: DestinationDataType["user"],
    destinationData:DestinationDataType,
}
export default function DeleteDestinationDialogPage({ destinationData, destination }: DeleteDestinationDialogPageProps) {
  const handleDeleteDestination = async() => {
    const res = await fetch(`http://localhost:5000/destination/${destinationData._id}`, {
      method:"DELETE",
    })
    const deleteData = await res.json();
    console.log(deleteData)
    redirect("/destinations")
  }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger >
          <button
            type="button"
            className="group flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 font-semibold text-red-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg"
          >
            <FaTrashAlt className="text-base transition-transform duration-300 group-hover:scale-110" />
            Delete
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure?
            </AlertDialogTitle>

            <AlertDialogDescription>
                          Are you sure you want to delete "<span className="font-bold text-black">{ destination.destinationName} "</span>? This action cannot be undone and will permanently remove this travel package from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction onClick={handleDeleteDestination} className="gap-2 bg-red-600 text-white hover:bg-red-700">
              <FaTrashAlt className="text-sm" />
              Delete Package
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
