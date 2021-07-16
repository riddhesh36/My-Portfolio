export default{
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name:"title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",

        },
        {
            name: "description",
            type: "string",
        },
        {
            name:"projectType",
            title:"projectType",
            type: "string",
            options:{
                list:[
                    {value: "personal", title: "Personal" },
                    {value: "client", title: "Client" },
                    {value: "freelance", title: "Freelance" },

                ]
            }
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type:"array",
            of:[
                {
                    type:"string",
                },

            ],
            options:{
                layout: "tags",
            },
        },

    ],
};