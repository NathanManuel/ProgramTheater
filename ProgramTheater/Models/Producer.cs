using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgramTheater.Models
{
    public class Producer
    {
        public Guid ID { get; set; }
        public String Name { get; set; }
        public int Age { get; set; }
        public String Nationality { get; set; }
        public String Gender { get; set; }
    }
}
