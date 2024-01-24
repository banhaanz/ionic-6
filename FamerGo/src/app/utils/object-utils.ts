export class ObjectUtils {

    public static isEmpty(object:any):boolean{
      return (object === null || object == undefined) ? true : false;
    }
}