using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DashboardVisual.Models;
using Newtonsoft.Json;

namespace DashboardVisual.Controllers
{
    public class MytablesController : Controller
    {
        private readonly DashboardDbContext _context;

        public MytablesController(DashboardDbContext context)
        {
            _context = context;
        }

        // GET: Mytables
        public async Task<IActionResult> Index()
        {
            //return _context.Mytables != null ? 
            //              View(await _context.Mytables.ToListAsync()) :
            //              Problem("Entity set 'DashboardDbContext.Mytables'  is null.");


            var res = await _context.Mytables.ToListAsync();
            if(_context.Mytables != null) {              
                ViewBag.DataPoints = JsonConvert.SerializeObject(res, _jsonSetting);
                return View();
            }            
            else 
                return Problem("Entity set 'DashboardDbContext.Mytables'  is null.");


        }
        JsonSerializerSettings _jsonSetting = new JsonSerializerSettings() { NullValueHandling = NullValueHandling.Ignore };

        // GET: Mytables/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Mytables == null)
            {
                return NotFound();
            }

            var mytable = await _context.Mytables
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mytable == null)
            {
                return NotFound();
            }

            return View(mytable);
        }

        // GET: Mytables/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Mytables/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,End_year,Intensity,Sector,Topic,Insight,Url,Region,Start_year,Impact,Added,Published,Country,Relevance,Pestle,Source,Title,Likelihood")] Mytable mytable)
        {
            if (ModelState.IsValid)
            {
                _context.Add(mytable);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(mytable);
        }

        // GET: Mytables/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Mytables == null)
            {
                return NotFound();
            }

            var mytable = await _context.Mytables.FindAsync(id);
            if (mytable == null)
            {
                return NotFound();
            }
            return View(mytable);
        }

        // POST: Mytables/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,End_year,Intensity,Sector,Topic,Insight,Url,Region,Start_year,Impact,Added,Published,Country,Relevance,Pestle,Source,Title,Likelihood")] Mytable mytable)
        {
            if (id != mytable.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(mytable);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MytableExists(mytable.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(mytable);
        }

        // GET: Mytables/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Mytables == null)
            {
                return NotFound();
            }

            var mytable = await _context.Mytables
                .FirstOrDefaultAsync(m => m.Id == id);
            if (mytable == null)
            {
                return NotFound();
            }

            return View(mytable);
        }

        // POST: Mytables/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Mytables == null)
            {
                return Problem("Entity set 'DashboardDbContext.Mytables'  is null.");
            }
            var mytable = await _context.Mytables.FindAsync(id);
            if (mytable != null)
            {
                _context.Mytables.Remove(mytable);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MytableExists(int id)
        {
          return (_context.Mytables?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
