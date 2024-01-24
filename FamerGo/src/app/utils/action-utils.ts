import { ObjectUtils } from "./object-utils";

export class ActionUtils {

    public static waitToExecuteAsync(task:Function, milliseconds?:number){
        return new Promise(resolve => {
          if(!ObjectUtils.isEmpty(milliseconds)){
            setTimeout(() => {
              resolve(task());
            }, milliseconds);
          } else {
            resolve(task());
          }
        });
      }
    
      public static waitToExecute(task:Function, milliseconds?:number){
          setTimeout(() => {
            task();
          }, milliseconds);
      }

}