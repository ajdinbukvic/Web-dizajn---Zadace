using System.ComponentModel.DataAnnotations;

namespace ZSRVjezbe8.Data.Entities
{
    public class WeatherSummary
    {
        [Key]
        public int WeatherId { get; set; }
        public string WeatherName { get; set; }
        public int WeatherLevel { get; set; }
        public decimal WeatherTemperature { get; set; }
    }
}
