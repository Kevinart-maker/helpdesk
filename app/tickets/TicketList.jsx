import Link from 'next/link'

async function getTickets(){
    const res = await fetch('https://json-server-temp.vercel.app/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
        }
    })

    return res.json()
}
 
export default async function TicketList() {
    const tickets = await getTickets()

  return (
    <>
        {tickets.map((ticket)=> (
            <div key={ticket._id} className="card my-5">
                <Link href={`/tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority}
                    </div>
                </Link>
            </div>
        ))}
        {tickets.length === 0 && (
            <p className="text-center">There are no open tickets!</p>
        )}
    </>
  )
}
