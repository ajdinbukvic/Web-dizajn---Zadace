using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZSRVjezbe8.Models;

namespace ZSRVjezbe8.Controllers
{
    [ApiController]
    [Route("api/weather")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly List<string> Summaries = new()
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public WeatherForecastController()
        {
     
        }

        [HttpGet]
        public IActionResult GetSummary(int index)
        {
            if (index < 0 || index >= Summaries.Count) return BadRequest();
            return Ok(Summaries[index]);
        }

        [HttpPost]
        public IActionResult AddSummary([FromBody] SummaryAddRequestPayload request)
        {
            Summaries.Insert(0, request.Summary);
            return Ok(Summaries);
        }

        [HttpDelete]
        public IActionResult DeleteSummary()
        {
            if(Summaries.Count > 0)
            {
                int middleElement = Summaries.Count / 2;
                Summaries.RemoveAt(middleElement);
                return Ok(Summaries);
            }
            return BadRequest();
        }

        [HttpPut]
        public IActionResult UpdateSummary([FromBody] SummaryUpdateRequestPayload request)
        {
            if (request.Index < 0 || request.Index >= Summaries.Count) return BadRequest();
            Summaries[request.Index] = request.UpdatedSummary;
            return Ok(Summaries);
        }
    }
}
