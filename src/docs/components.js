module.exports = {
    components:{
        schemas:{
            Product:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Product identification number",
                        example:"65e19d398c6ae462f2085ef7"
                    },
                    name:{
                        type:'string',
                        description:"Product name to show",
                        example:"Product 1"
                    },
                    description:{
                        type:'string',
                        description:"Product description",
                        example:"Description of product 1"
                    },
                    category:{
                        type:'string',
                        description:"Product category",
                        example:"Trousers"
                    },
                    size:{
                        type:'string',
                        description:"Product size",
                        example:"XS"
                    },
                    price:{
                        type:'string',
                        description:"Product price",
                        example:"29.50"
                    }
                }
            },
            ProductInput:{
                type:'object',
                properties:{
                    name:{
                        type:'string',
                        description:"Product name to show",
                        example:"Product 1"
                    },
                    description:{
                        type:'string',
                        description:"Product description",
                        example:"Description of product 1"
                    },
                    category:{
                        type:'string',
                        description:"Product category",
                        example:"Trousers"
                    },
                    size:{
                        type:'string',
                        description:"Product size",
                        example:"XS"
                    },
                    price:{
                        type:'string',
                        description:"Product price",
                        example:"29.50"
                    }
                }
            },
            ProductId:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Product identification number",
                        example:"65e19d398c6ae462f2085ef7"
                    }
                }
            },
            ProductCategory:{
                type:'object',
                properties:{
                    category: {
                        type:'objectCategory',
                        description:"Product category",
                        example:"trousers"
                    }
                }
            }
        }
    }
}