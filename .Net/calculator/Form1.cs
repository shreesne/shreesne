using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace calculator
{
    public partial class Form1 : Form
    {
        Double resultValue = 0;
        String operationPerformed = "";
        bool isOperationPerformed = false;
        public Form1()
        {
            InitializeComponent();  
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btn_Click(object sender, EventArgs e)
        {   if ((textBox1.Text == "0")||(isOperationPerformed))
                textBox1.Clear();
                textBox1.Text = textBox1.Text + ((ButtonBase)sender).Text;
                 isOperationPerformed = false;
        }

        private void action(object sender, EventArgs e)
        {
            if (resultValue != 0)
            {
                btneql.PerformClick();
                operationPerformed = ((ButtonBase)sender).Text;

                label2.Text = resultValue + "" + operationPerformed;
                isOperationPerformed = true;
            }
            else
            {

                operationPerformed = ((ButtonBase)sender).Text;
                resultValue = Double.Parse(textBox1.Text);

                label2.Text = resultValue + "" + operationPerformed;
                isOperationPerformed = true;
            }
        }
        private void CEbutton(object sender, EventArgs e)
        {
            textBox1.Text = "0";
        }
        private void clearButton(object sender, EventArgs e)
        {
            textBox1.Text = "0";
            resultValue = 0;

        }

        private void equal(object sender, EventArgs e)
        {
            switch(operationPerformed)
            { case "+":
                    textBox1.Text = (resultValue + Double.Parse(textBox1.Text)).ToString();
                    break;
                case "-":
                    textBox1.Text = (resultValue - Double.Parse(textBox1.Text)).ToString();
                    break;
                case "*":
                    textBox1.Text = (resultValue * Double.Parse(textBox1.Text)).ToString();
                    break;
                case "/":
                    textBox1.Text = (resultValue / Double.Parse(textBox1.Text)).ToString();
                    break;
                default:
                    break;
            }
            resultValue = Double.Parse(textBox1.Text);
            label2.Text = "";
        }
    }
}
