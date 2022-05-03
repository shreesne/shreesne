using System;

namespace first
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Program obj = new Program();
            var abc=obj.Add(10, 100018187);
            Console.WriteLine("result is"+ abc);

            var abc1 = obj.Add("sunday-", "daru");
            Console.WriteLine("result is" + abc1);
        }

        private dynamic Add(dynamic x, dynamic y)
        {
            if (x is null)
            {
                throw new ArgumentNullException(nameof(x));
            }

            if (y is null)
            {
                throw new ArgumentNullException(nameof(y));
            }

            var res = x + y;
            return res;
        }
    }

}
