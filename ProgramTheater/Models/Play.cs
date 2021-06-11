using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgramTheater.Models
{
    public class Play
    {
        public Guid ID { get; set; }
        public String PlayName { get; set; }
        public Guid MainActor { get; set; }
        public Guid Producer { get; set; }
        public Guid Theater { get; set; }
        
    }
}
