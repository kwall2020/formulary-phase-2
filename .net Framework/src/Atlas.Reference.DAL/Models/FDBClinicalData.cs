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
    
    public partial class FDBClinicalData
    {
        public long FDBClinicalDataSK { get; set; }
        public int PatEdMonoCode { get; set; }
        public int PatEdMonoSeqNo { get; set; }
        public string PatEdMonoTextType { get; set; }
        public string PatEdMonoTextLine { get; set; }
        public System.Guid BatchId { get; set; }
    }
}