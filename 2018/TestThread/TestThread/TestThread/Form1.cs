using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TestThread
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //Task parent = new Task(() =>
            //  {
            //      CancellationTokenSource cts = new CancellationTokenSource(5000);
            //      //创建任务工厂
            //      TaskFactory tf = new TaskFactory(cts.Token, TaskCreationOptions.AttachedToParent, TaskContinuationOptions.ExecuteSynchronously, TaskScheduler.Default);
            //      //添加一组具有相同状态的子任务
            //      Task[] task = new Task[]{
            //           tf.StartNew(() => {listBox1.Items.Add(new {ID=1,Name="我是任务工厂里的第1个任务。"});   }),
            //         tf.StartNew(() => {listBox1.Items.Add(new {ID=2,Name="我是任务工厂里的第2个任务。"});   }),
            //         tf.StartNew(() => {listBox1.Items.Add(new {ID=3,Name="我是任务工厂里的第3个任务。"});   }),
            //          tf.StartNew(() => {listBox1.Items.Add(new {ID=4,Name="我是任务工厂里的第4个任务。"});   }),
            //         tf.StartNew(() => {listBox1.Items.Add(new {ID=5,Name="我是任务工厂里的第5个任务。"});   })
            //       };
            //  });
            //parent.Start();
            MessageBox.Show(getResult());
        }


        public string getResult()
        {
            string result = "";
            Task parent = new Task(() =>
            {
                CancellationTokenSource cts = new CancellationTokenSource(5000);
                //创建任务工厂
                TaskFactory tf = new TaskFactory(cts.Token, TaskCreationOptions.AttachedToParent, TaskContinuationOptions.ExecuteSynchronously, TaskScheduler.Default);
                //添加一组具有相同状态的子任务
                Task[] task = new Task[]{
                       tf.StartNew(() => {listBox1.Items.Add(new {ID=1,Name="我是任务工厂里的第1个任务。"}); result+="我是任务工厂里的第1个任务。";  }),
                     tf.StartNew(() => {listBox1.Items.Add(new {ID=2,Name="我是任务工厂里的第2个任务。"});   result+="我是任务工厂里的第2个任务。"; }),
                     tf.StartNew(() => {listBox1.Items.Add(new {ID=3,Name="我是任务工厂里的第3个任务。"});  result+="我是任务工厂里的第3个任务。";  }),
                      tf.StartNew(() => {listBox1.Items.Add(new {ID=4,Name="我是任务工厂里的第4个任务。"}); result+="我是任务工厂里的第4个任务。";   }),
                     tf.StartNew(() => {listBox1.Items.Add(new {ID=5,Name="我是任务工厂里的第5个任务。"});  result+="我是任务工厂里的第5个任务。";  })
                   };
            });
            parent.Start();
            return result;
        }
    }
}
