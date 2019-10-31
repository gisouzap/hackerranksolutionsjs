/*
 * Create the function factorial here
 */
    function factorial(n)
    {
        var result = 1;
        for (let i = 1; i <= n; i++)
        {
            result = result * i;
        }
        return result;
    }
