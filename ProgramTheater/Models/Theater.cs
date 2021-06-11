using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgramTheater.Models
{
    public class Theater
    {
        public Guid ID { get; set; }
        public String Name{ get; set; }
        public String Country { get; set; }
        public String City { get; set; }
        public String Street { get; set; }
    }
}
