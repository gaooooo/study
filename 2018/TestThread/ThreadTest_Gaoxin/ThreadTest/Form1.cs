using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Threading;

namespace ThreadTest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        public delegate string myDelegate1(string s);

        private string SetProcessBar1(string s) {
            progressBar1.Value = 0;
            progressBar1.Maximum = 2;
            this.progressBar1.Value = this.progressBar1.Value + 1;
            // MessageBox.Show("SetProcessBar1"+s);
            return "result:" + s;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Thread thread = new Thread(new ThreadStart(TRun1));
            thread.Start();
            //MessageBox.Show("使用多线程");
           
        }

        private void TRun1() {
          
            //判断控件是否在主线程内
            if (!this.progressBar1.InvokeRequired)
            {
                MessageBox.Show("同一线程内");
                Thread.Sleep(2000);
            }
            else {
                myDelegate1 md1 = new myDelegate1(SetProcessBar1);
                MessageBox.Show("不是同一线程");
                Thread.Sleep(2000);
                var result = Invoke(md1, "hello world");
                MessageBox.Show(result.ToString());
            }
        }

         
    }
}
