package ca.canhs.back.bootstrap;

import ca.canhs.back.model.Client;
import ca.canhs.back.model.Package;
import ca.canhs.back.service.ClientService;
import ca.canhs.back.service.PackageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final ClientService clientService;
    private final PackageService packageService;

    public DataLoader(ClientService clientService, PackageService packageService) {
        this.clientService = clientService;
        this.packageService = packageService;
    }

    @Override
    public void run(String... args) {
        Client c1 = Client.builder()
                .firstName("John")
                .lastName("Doe")
                .build();
        clientService.save(c1);

        Package p1 = Package.builder()
                .name("AA")
                .client(c1)
                .build();
        packageService.save(p1);

        Package p2 = Package.builder()
                .name("BB")
                .client(c1)
                .build();
        packageService.save(p2);

        Client c2 = Client.builder()
                .firstName("Kate")
                .lastName("Smith")
                .build();
        clientService.save(c2);

        Package p3 = Package.builder()
                .name("CC")
                .client(c2)
                .build();
        packageService.save(p3);

        Package p4 = Package.builder()
                .name("DD")
                .client(c2)
                .build();
        packageService.save(p4);
    }
}
