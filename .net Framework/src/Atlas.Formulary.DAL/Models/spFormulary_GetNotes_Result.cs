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
    
    public partial class spFormulary_GetNotes_Result
    {
        public long AprvlSK { get; set; }
        public Nullable<System.DateTime> AprvlDate { get; set; }
        public string CreatedBy { get; set; }
        public string AprvlTypeName { get; set; }
        public string AprvlNotes { get; set; }
        public Nullable<long> DrugListSK { get; set; }
        public Nullable<long> FrmlrySK { get; set; }
    }
}