import { Request, Response } from 'express';
import { entity1Service } from '../service/entity1Service';
import { CustomLogger } from '../config/Logger'
let entity1 = new entity1Service();

export class entity1Controller {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entity1.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entity1Controller.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entity1Controller.ts: GetNounCreatedBy');
    })}


}