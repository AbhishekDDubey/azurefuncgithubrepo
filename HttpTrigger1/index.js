module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.num1 && req.query.num2)
    {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "The result is:" + req.query.num1 * req.query.num2
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Pass two query parameters num1 & num2"
        }
    }

}