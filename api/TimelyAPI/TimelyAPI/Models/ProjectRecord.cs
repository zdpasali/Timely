using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyAPI.Models
{
    public class ProjectRecord
    {
        public string ProjectName { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string DurationTime { get; set; }
    }
}
