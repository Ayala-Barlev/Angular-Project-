using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public enum Services{ GRAPHOLOGY, FLOWERS,CARDS };
    public class Comment
    {
        public int Id { get; set; }
        public Services ServiceType { get; set; }
        public string Text { get; set; }
        public string Name { get; set; }
        public int Likes { get; set; }
        public DateTime Date { get; set; }
        public Comment(int id, Services nameSer,string text,string name,int likes,DateTime date)
        {
            Id = id;
            ServiceType = nameSer;
            Text = text;
            Name = name;
            Likes = likes;
            Date = date;
        }
        public void AddLike()
        {
            Likes++;
        }
    }
}