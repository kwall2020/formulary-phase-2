//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Atlas.Reference.DAL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class AppSettings
    {
        public long AppSettingsSK { get; set; }
        public string AppCode { get; set; }
        public string Envmnt { get; set; }
        public string AppKey { get; set; }
        public string AppSubKey { get; set; }
        public string Value { get; set; }
        public string Type { get; set; }
        public System.DateTime EfctvStartDt { get; set; }
        public System.DateTime EfctvEndDt { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTimeOffset CreatedTs { get; set; }
        public string LastModfdBy { get; set; }
        public System.DateTimeOffset LastModfdTs { get; set; }
        public Nullable<System.DateTimeOffset> InctvTs { get; set; }
        public Nullable<System.DateTimeOffset> DelTs { get; set; }
    }
}