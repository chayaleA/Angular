using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Numerics;
using System;
using server_angular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server_angular.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class StudentsController : ControllerBase
  {
    //  public static List<Student> students = new List<Student>
    //{
    //    new Student
    //  {
    //    Id = 123456789,
    //    FirstName = "chaya",
    //    Lastname = "avramovitz",
    //    Address = "bar ilan 18",
    //    Phone = "0548529696",
    //    Active = true,
    //    Mail = "chayale96@gmail.com",
    //    AverageMark = 0,
    //    Description = "I am an amazing girl",
    //    TestArr = new List<Test>()
    //    {
    //       new Test
    //      {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test  {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      }
    //    },
    //    AbsenceDays = new List<AbsenceDay>()
    //  },

    //    new Student
    //  {
    //    Id = 325449940,
    //    FirstName = "Yafit",
    //    Lastname = "Ben Chaim",
    //    Address = "bar ilan 25",
    //    Phone = "0548529696",
    //    Active = true,
    //    Mail = "Yb@gmail.com",
    //    AverageMark = 0,
    //    Description = "I am an amazing girl",
    //    TestArr = new List<Test>()
    //    {
    //       new Test
    //      {
    //        NameOfTest = "English",Mark = 40, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test {
    //        NameOfTest = "English",Mark = 60, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test  {
    //        NameOfTest = "English",Mark = 42, Kode = 1,Date = new DateTime(2023,10,23)
    //      }
    //    },
    //    AbsenceDays = new List<AbsenceDay>()
    //  },

    //    new Student
    //  {
    //    Id = 123456789,
    //    FirstName = "Leale",
    //    Lastname = "avramovitz",
    //    Address = "bar ilan 18",
    //    Phone = "0548529696",
    //    Active = true,
    //    Mail = "chayale96@gmail.com",
    //    AverageMark = 0,
    //    Description = "I am an amazing girl",
    //    TestArr = new List<Test>()
    //    {
    //       new Test
    //      {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test  {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      }
    //    },
    //    AbsenceDays = new List<AbsenceDay>()
    //  },

    //    new Student
    //  {
    //    Id = 123456789,
    //    FirstName = "Father",
    //    Lastname = "avramovitz",
    //    Address = "bar ilan 18",
    //    Phone = "0548529696",
    //    Active = true,
    //    Mail = "chayale96@gmail.com",
    //    AverageMark = 0,
    //    Description = "I am an amazing girl",
    //    TestArr = new List<Test>()
    //    {
    //       new Test
    //      {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      },
    //       new Test  {
    //        NameOfTest = "English",Mark = 100, Kode = 1,Date = new DateTime(2023,10,23)
    //      }
    //    },
    //    AbsenceDays = new List<AbsenceDay>()
    //  }
    //};

    public static List<Student> students = new List<Student>
    {
      new Student
    {
      id = 456789,
      firstName = "yael",
      lastname = "avramovitz",
      address = "bar ilan 18",
      phone = "0548529696",
      active = false,
     // mail = "chayale96@gmail.com",
      averageMark = 0,
      description = "I am an amazing girl",
      testArr = new List<Test>()
      {
         new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
      },
     // absenceDays = new List<AbsenceDay>()
    },
      new Student
    {
      id = 123456789,
      firstName = "chaya",
      lastname = "avramovitz",
      address = "bar ilan 18",
      phone = "0548529696",
      active = true,
     // mail = "chayale96@gmail.com",
      averageMark = 0,
      description = "I am an amazing girl",
      testArr = new List<Test>()
      {
         new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
      },
     // absenceDays = new List<AbsenceDay>()
    },
      new Student
    {
      id = 65555789,
      firstName = "chaya",
      lastname = "avramovitz",
      address = "bar ilan 18",
      phone = "0548529696",
      active = true,
     // mail = "chayale96@gmail.com",
      averageMark = 0,
      description = "I am an amazing girl",
      testArr = new List<Test>()
      {
         new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
      },
     // absenceDays = new List<AbsenceDay>()
    },
      new Student
    {
      id = 13666789,
      firstName = "chaya",
      lastname = "avramovitz",
      address = "bar ilan 18",
      phone = "0548529696",
      active = true,
     // mail = "chayale96@gmail.com",
      averageMark = 0,
      description = "I am an amazing girl",
      testArr = new List<Test>()
      {
         new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
          new Test
        {
          nameOfTest = "English",mark = 100, kode = 1,date = new DateTime(2023,10,23)
        },
      },
     // absenceDays = new List<AbsenceDay>()
    },
    };


    // GET: api/<StudentsController>
    [HttpGet]
    public IEnumerable<Student> Get()
    {
      return students;
    }

    // GET api/<StudentsController>/5

    [HttpGet("{active}")]
    public IEnumerable<Student> GetActive(bool active)
    {
      return active ? students.Where(x => x.active) : students;
    }

    [HttpPost]
    public void Post([FromBody] Student student)
    {
        students.Add(student);
    }

    // PUT api/<StudentsController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Student student)
    {
      int index = students.FindIndex(s => s.id == id);
      students[index] = student;
    }

    // DELETE api/<StudentsController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      int index = students.FindIndex(s => s.id == id);
      if (index < 0)
        return;
      students.Remove(students[index]);
    }
  }
}
