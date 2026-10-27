import DestinationCardPage from "./DestinationCard";


export default async function DestinationsPage() {
  const res = await fetch("http://localhost:5000/destinations");
  const data = await res.json();
  console.log(data)
  return (
    <div><DestinationCardPage data={data}></DestinationCardPage></div>
  )
}
