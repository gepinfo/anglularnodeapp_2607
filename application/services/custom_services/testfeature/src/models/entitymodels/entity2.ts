
export interface entity2 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   empid: { type: String, ref: 'entity1' },
   enter_name: { type: String }
}



