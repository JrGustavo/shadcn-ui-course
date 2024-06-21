"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Payment} from "@/app/data/payments.data";
import {Badge} from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {DotsHorizontalIcon} from "@radix-ui/react-icons";
import {toast} from "@/components/ui/use-toast";




export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell:  ({ row}) => {
            const status = row.getValue("status") as string;
            const variant = {
                pending: "secondary",
                processing: "secondary",
                success: "success",
                failed: "destructive",
            }[status] ?? ('default') as any;

            return (
                <Badge variant={variant} capitalize>
                    {status}
                </Badge>
            );
        },
    },

    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "COP",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },

    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(payment.id);
                            toast({
                                description: "Payment ID copied to clipboard",
                            })
                            }}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },




]
