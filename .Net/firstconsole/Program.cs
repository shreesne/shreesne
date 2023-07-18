using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace firstconsole
{
    public class Fibonacci
    {
        public static void Main(string[] args)
        {
            int i, n1 = 0, n2 = 1, n3,number;
            Console.WriteLine("enter no of numbers=");
            number = int.Parse(Console.ReadLine());
            Console.WriteLine(n1+ " "+ n2+ " ");
            Console.ReadLine();
            for(i=2;i<number;i++)
            { n3 = n2 + n1;
                Console.WriteLine(n3 + " ");
                Console.ReadLine();
                n1 =n2 ;
                n2 = n3;
            }
        }
    }
}