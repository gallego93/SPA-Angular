import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  message = { email: '', subject: '', message: '' };

  constructor(private contactService: ContactService) { }

  sendMessage() {
    this.contactService.sendMessage(this.message).subscribe((response) => {
      console.log('Mensaje enviado exitosamente:', response);
      alert('Tu mensaje ha sido enviado. ¡Gracias por contactarnos!');
      this.message = { email: '', subject: '', message: '' };
    },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Ocurrió un error. Por favor, intenta de nuevo.')
      }
    );
  }
}
