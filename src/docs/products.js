module.exports = {
    paths: {
        '/dashboard': {
            post: {
                tags: {
                    Product: "Create a product",
                },
                description: "Create Product",
                operationId: "createProduct",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                            $ref: "#/components/schemas/ProductInput",
                            }
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Product created successfully",
                    },
                    500: {
                        description: "There was a problem trying to create a new Product",
                    },
                },
            },
            get: {
                tags: {
                    Product: 'Get all created products'
                },
                description: "Get all products",
                operationId: "getProducts",
                parameters: [],
                responses: {
                    201: {
                        description: "Products",
                    },
                    500: {
                        description: "There was a problem searching for your products",
                    },
                },
            },
            put: {
                tags: {
                    Product: "Update product by ID",
                },
                description: "Update Product by ID",
                operationId: "updateProductById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/ProductId",
                    },
                    description: "Id of Product to update",
                    },
                ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Product" },
                    },
                },
            },
                responses: {
                    200: { description: 'Product updated' },
                    500: { description: "There was a problem updating your task" },
                },
            },
            delete: {
                tags: {
                    Product: "Delete Product by ID",
                },
                description: "Delete Product by ID",
                operationId: "deleteProductById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/ProductId",
                    },
                    description: "Id of Product to delete",
                    },
                ],
                responses: {
                    200: { description: 'Product deleted!' },
                    500: { description: "There was a problem deleting your product" },
                },
            },
        },
        '/products': {
            get: {
                tags: {
                    Product: 'Get all created products'
                },
                description: "Get all products",
                operationId: "getProducts",
                parameters: [],
                responses: {
                    201: {
                        description: "Products",
                    },
                    500: {
                        description: "There was a problem searching for your products",
                    },
                },
            }
        },
        '/products/{_id}/detail': {
            get: {
                tags: {
                    Product: "Get product by ID",
                },
                description: "Get product by ID",
                operationId: "productById",
                parameters: [
                    {
                    name: "_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/ProductId",
                    },
                    description: "Id of Product to get",
                    },
                ],
                responses: {
                    200: { description: 'Your product '},
                    500: { description: "There was a problem searching for your product" },
                },
            },
        },
        '/products/{category}': {
            get: {
                tags: {
                    Product: "Sort products by category",
                },
                description: "Sort products by category",
                operationId: "productsByCategory",
                parameters: [
                    {
                    name: "category",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/ProductCategory",
                    },
                    description: "Category of Products",
                    },
                ],
                responses: {
                    200: { description: 'Your products '},
                    500: { description: "There was a problem searching for your products" },
                },
            },
        },
    },
};
