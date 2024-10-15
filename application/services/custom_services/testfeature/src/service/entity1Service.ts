import { Request, Response } from 'express';
import {entity1Dao} from '../dao/entity1Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';













let entity1 = new entity1Dao();

export class entity1Service {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: Delete')
     let  entity1Id = req.params.id;
     entity1.Delete(entity1Id,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: Update')
     let  entity1Data = req.body;
     entity1.Update(entity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: GetEntityById')
     let  entity1Id = req.params.id;
     entity1.GetEntityById(entity1Id,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: GetAllValues')
     
     entity1.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: Create')
     let  entity1Data = req.body;
     entity1.Create(entity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entity1Service.ts: GetNounCreatedBy')
     let  entity1Data = { created_by: req.query.createdby };
     entity1.GetNounCreatedBy(entity1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entity1Service.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}