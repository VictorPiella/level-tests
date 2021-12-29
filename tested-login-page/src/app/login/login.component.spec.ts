import { fireEvent, render, screen } from '@testing-library/angular';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import userEvent from '@testing-library/user-event';


it('should render the form and do the happy path', async () => {
    const submitSpy = jest.fn();
    await render(LoginComponent, {
        imports: [ReactiveFormsModule],
        componentProperties: {
            permissions: 'adminsitrador',
            onSubmit: submitSpy
        },
        
    });
    screen.getByText(/Logo/i);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/Constraseña/i);

    userEvent.click(email)
    screen.getByText('El email es obligatorio');
    
    userEvent.click(password)
    screen.getByText('La contraseña es obligatorio');
    userEvent.type(email, 'bob');
    expect(screen.queryByText("El mail es obligatorio")).toBeNull();
    screen.getByText('El email no es válido');

    userEvent.type(email, 'bob@parker.com');
    expect(screen.queryByText("El email no es válido")).toBeNull();

    userEvent.type(password, 'password');
    expect(screen.queryByText("La contraseña es obligatorio")).toBeNull();

    const submit = screen.getByText(/Iniciar sesión/i);
    userEvent.click(submit);
    expect(submitSpy).toHaveBeenCalledWith({
        email: 'bob@parker.com', password: 'password' 
    })

});

it('should change acces type to admin', async () => {
    const submitSpy = jest.fn();
    await render(LoginComponent, {
        imports: [ReactiveFormsModule],
        componentProperties: {
            permissions: 'adminsitrador',
            accessType: submitSpy
        },
    });

    const adminCard = screen.getByTestId('admin');
    userEvent.click(adminCard);
    expect(submitSpy).toHaveBeenCalledWith('adminsitrador');
    
});
it('should change acces type to agent', async () => {
    const submitSpy = jest.fn();
    await render(LoginComponent, {
        imports: [ReactiveFormsModule],
        componentProperties: {
            permissions: 'adminsitrador',
            accessType: submitSpy
        },
    });

    const adminCard = screen.getByTestId('agent');
    userEvent.click(adminCard);
    expect(submitSpy).toHaveBeenCalledWith('agente');
    
});