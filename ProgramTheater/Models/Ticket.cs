using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgramTheater.Models
{
    public class Ticket
    {
        public Guid ID { get; set; }
        public String BuyerName{ get; set; }
        public Guid Play{ get; set; }
        public int pay{ get; set; }
    }
}
