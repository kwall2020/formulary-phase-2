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
    using System.Collections.Generic;
    
    public partial class FrmlryConfgPrpty
    {
        public long FrmlryConfgPrptySK { get; set; }
        public long FrmlrySK { get; set; }
        public long FrmlryConfgPrptyTypeSK { get; set; }
        public string FrmlryConfgPrptyVal { get; set; }
        public System.DateTime EfctvStartDt { get; set; }
        public System.DateTime EfctvEndDt { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTimeOffset CreatedTs { get; set; }
        public string LastModfdBy { get; set; }
        public System.DateTimeOffset LastModfdTs { get; set; }
        public Nullable<System.DateTimeOffset> InctvTs { get; set; }
        public Nullable<System.DateTimeOffset> DelTs { get; set; }
    
        public virtual Frmlry Frmlry { get; set; }
        public virtual FrmlryConfgPrptyType FrmlryConfgPrptyType { get; set; }
    }
}