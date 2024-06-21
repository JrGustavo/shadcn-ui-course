import {payments} from "@/app/data/payments.data";
import {DataTable} from "@/app/dashboard/data-table/DataTable";
import {columns} from "@/app/dashboard/data-table/Columns";


async function fetchData(){
    return payments;
}



export default async function Page() {
    const data = await fetchData();

    return (
        <div>
<DataTable columns={columns}  data={data}  />
        </div>
    )
}

