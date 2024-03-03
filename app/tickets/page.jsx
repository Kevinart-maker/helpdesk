import { Suspense } from "react";
import Loading from "../loading";
import TicketList from "./TicketList";

export default function Tickets(){
    return (
        <main>
            <nav>
                <div>Tickets</div>
                <p><small>Currently open tickets</small></p>
            </nav>

            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    );
}
 