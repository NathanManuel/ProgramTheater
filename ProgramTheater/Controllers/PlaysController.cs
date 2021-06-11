using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProgramTheater.Data;
using ProgramTheater.Models;

namespace ProgramTheater.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaysController : ControllerBase
    {
        private readonly ProgramTheaterContext _context;

        public PlaysController(ProgramTheaterContext context)
        {
            _context = context;
        }

        // GET: api/Plays
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Play>>> GetPlay()
        {
            return await _context.Play.ToListAsync();
        }

        // GET: api/Plays/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Play>> GetPlay(Guid id)
        {
            var play = await _context.Play.FindAsync(id);

            if (play == null)
            {
                return NotFound();
            }

            return play;
        }

        // PUT: api/Plays/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlay(Guid id, Play play)
        {
            if (id != play.ID)
            {
                return BadRequest();
            }

            _context.Entry(play).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Plays
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Play>> PostPlay(Play play)
        {
            _context.Play.Add(play);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlay", new { id = play.ID }, play);
        }

        // DELETE: api/Plays/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlay(Guid id)
        {
            var play = await _context.Play.FindAsync(id);
            if (play == null)
            {
                return NotFound();
            }

            _context.Play.Remove(play);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlayExists(Guid id)
        {
            return _context.Play.Any(e => e.ID == id);
        }
    }
}
