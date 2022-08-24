using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Procedures;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mysqlconnection.Data;
using mysqlconnection.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class locationController : ControllerBase
    {
        private readonly WalkInContext _context;
        private readonly walkInDetailContext _contextProcedures;

        private readonly fullWalkInContext _contextFullWalkIn;

        public locationController(WalkInContext context, walkInDetailContext contextProcedures, fullWalkInContext contextFullWalkIn)
        {
            _context = context;
            _contextProcedures = contextProcedures;
            _contextFullWalkIn = contextFullWalkIn;
        }

        // GET: api/location
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocations()
        {
          if (_context.Locations == null)
          {
              return NotFound();
          }
            return await _context.Locations.ToListAsync();
        }

        // GET: api/location/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Location>> GetLocation(int id)
        {
          if (_context.Locations == null)
          {
              return NotFound();
          }
            var location = await _context.Locations.FindAsync(id);

            if (location == null)
            {
                return NotFound();
            }

            return location;
        }

        // PUT: api/location/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocation(int id, Location location)
        {
            if (id != location.Id)
            {
                return BadRequest();
            }

            _context.Entry(location).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocationExists(id))
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

        // POST: api/location
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Location>> PostLocation(Location location)
        {
          if (_context.Locations == null)
          {
              return Problem("Entity set 'WalkInContext.Locations'  is null.");
          }
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLocation", new { id = location.Id }, location);
        }

        // DELETE: api/location/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation(int id)
        {
            if (_context.Locations == null)
            {
                return NotFound();
            }
            var location = await _context.Locations.FindAsync(id);
            if (location == null)
            {
                return NotFound();
            }

            _context.Locations.Remove(location);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LocationExists(int id)
        {
            return (_context.Locations?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        //walkin detais api (less details wala)
        [HttpGet("GetwalkInDetail")]
        public async Task<IEnumerable<walkInDetail>> GetwalkInDetail()
        {
            List<walkInDetail> walk = new List<walkInDetail>();

        
            return await _contextProcedures.WalkInDetails
               .FromSqlRaw("call walkInDetail()").ToListAsync();
        }

        //walkin details api (complete details)

        [HttpGet("GetfullWalkInDetails")]
        public async Task<IEnumerable<fullWalkIn>> GetfullWalkInDetails()
        {
            List<fullWalkIn> walk = new List<fullWalkIn>();

        
            return await _contextFullWalkIn.FullWalkIns
               .FromSqlRaw("call fullWalkInDetails()").ToListAsync();
        }

   
    }
}
