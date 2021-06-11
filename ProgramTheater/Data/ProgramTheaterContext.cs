using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProgramTheater.Models;

namespace ProgramTheater.Data
{
    public class ProgramTheaterContext : DbContext
    {
        public ProgramTheaterContext (DbContextOptions<ProgramTheaterContext> options)
            : base(options)
        {
        }

        public DbSet<ProgramTheater.Models.Theater> Theater { get; set; }

        public DbSet<ProgramTheater.Models.Actor> Actor { get; set; }

        public DbSet<ProgramTheater.Models.Producer> Producer { get; set; }

        public DbSet<ProgramTheater.Models.Play> Play { get; set; }

        public DbSet<ProgramTheater.Models.Ticket> Ticket { get; set; }
    }
}
