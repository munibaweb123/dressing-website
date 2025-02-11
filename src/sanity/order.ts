export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }],
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
           options: {
            list: [
                { title: 'Pending', value: 'pending' },
                { title: 'Dispatched', value: 'dispatched' },
                { title: 'Completed', value: 'completed' }
            ],
            layout:'radio'
           },
           initialValue : 'pending'
        },
        {
            name: 'total',
            title: 'Total Amount', 
            type: 'number',
        },
        {
            name:"discount",
            type:"number",
            title:"Discount",
        },
        {
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
        },
    ],
}
