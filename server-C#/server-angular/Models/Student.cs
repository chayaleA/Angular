//using static System.Net.Mime.MediaTypeNames;

//namespace server_angular.Models
//{
//  public enum Year
//  {
//    first_year = 1,
//    second_year = 2,
//    third_year = 3
//  }

//  public class AbsenceDay
//  {
//    public DateTime FormDate { get; set; }
//    public int Days { get; set; }
//  }

//  public class Test
//  {
//    public string NameOfTest { get; set; }
//    public int Mark { get; set; }
//    public int Kode { get; set; }
//    public DateTime Date { get; set; }
//  }

//  public class Student
//  {
//    public int Id { get; set; }
//    public string FirstName { get; set; }
//    public string Lastname { get; set; }
//    public string Address { get; set; }
//    public string Phone { get; set; }
//    public bool Active { get; set; }
//    public string Mail { get; set; }
//    public int AverageMark { get; set; }
//    public DateTime DepartureDate { get; set; }
//    public string Description { get; set; }
//    public int CourseId { get; set; }
//    public Year Year_school { get; set; }
//    public List<Test> TestArr { get; set; }
//    public List<AbsenceDay> AbsenceDays { get; set; }
//  }

//}


using static System.Net.Mime.MediaTypeNames;

namespace server_angular.Models
{
  public enum Year
  {
    first_year = 1,
    second_year = 2,
    third_year = 3
  }

  public class AbsenceDay
  {
    public DateTime formDate { get; set; }
    public int days { get; set; }
  }

  public class Test
  {
    public string nameOfTest { get; set; }
    public int mark { get; set; }
    public int kode { get; set; }
    public DateTime date { get; set; }
  }

  public class Student
  {
    public int id { get; set; }
    public string firstName { get; set; }
    public string lastname { get; set; }
    public string address { get; set; }
    public string phone { get; set; }
    public bool active { get; set; }
    //public string mail { get; set; }
    public int averageMark { get; set; }
    public DateTime departureDate { get; set; }
    public string description { get; set; }
    public int courseId { get; set; }
    public Year year_school { get; set; }
    public List<Test> testArr { get; set; }

   // public List<AbsenceDay> absenceDays { get; set; }
  }

}
