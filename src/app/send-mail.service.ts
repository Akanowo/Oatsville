import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IContactResponse } from 'src/models/contact-response.model';
import { IContact } from 'src/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient, private toastr: ToastrService, private loader: NgxUiLoaderService) { }

  sendMail(formData: IContact, token: any) {
    try {
      this.loader.start();
      return this.http.post('/api/contact', { formData, token })
      .subscribe((response: IContactResponse) => {
        this.loader.stop()
        if(response.status === 'Success') {
          this.toastr.success('Message sent successfully')
          return response;
        }
        this.toastr.error(response.error.message ? response.error.message : response.message);
        return response
      }) 
    } catch (error) {
      this.loader.stop()
      this.toastr.error(error.message);
      return;
    }
  }
}
