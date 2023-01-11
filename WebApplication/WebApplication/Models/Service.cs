using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class Service
    {
        public int Id { get; set; }
        public Services ServiceType { get; set; }
        public string Description { get; set; }
        public string Details { get; set; }
        public int ExperienceYears { get; set; }
        public string PlaceOfStudy { get; set; }
        
        public Service(int id,Services name, string des,string details,int years, string school)
        {
            Id = id;
            ServiceType = name;
            Description = des;
            Details = details;
            ExperienceYears = years;
            PlaceOfStudy = school;
        }
    }
}