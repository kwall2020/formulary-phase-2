//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Atlas.Formulary.DAL.Models
{
    using System;
    
    public partial class spJob_GetAll_Result
    {
        public long JobSK { get; set; }
        public long JobTypeSK { get; set; }
        public string JobTypeCode { get; set; }
        public long JobNbr { get; set; }
        public string JobDesc { get; set; }
        public Nullable<System.DateTime> JobStartTs { get; set; }
        public Nullable<System.DateTime> JobEndTs { get; set; }
        public string StatDesc { get; set; }
        public string Actn { get; set; }
        public string Rslt { get; set; }
    }
}