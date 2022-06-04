import React, { useEffect } from "react";
import $ from "jquery";

const KEY_POLICY = "accept_plocy";

const Policy = () => {
  const showModal = () => {
    $("#policy").modal({
      show: true,
      backdrop: "static",
      keyboard: false,
    });
  };

  const hideModal = () => {
    $("#policy").modal({
      show: false,
      backdrop: false,
    });

    $("#policy").modal("hide");
  };

  const checkUserAcceptPolicy = () => {
    if (localStorage.getItem(KEY_POLICY)) {
      hideModal();
    } else {
      showModal();
    }
  };

  const acceptPolicy = async () => {
    await localStorage.setItem(KEY_POLICY, JSON.stringify(true));
    hideModal();
  };

  useEffect(() => {
    $("document").ready(function () {
      checkUserAcceptPolicy();
    });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="policy"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Terms of use
              </h5>
            </div>
            <div className="modal-body">
              <p className="text-justify">Política de privacidad </p>
              <p className="text-justify">Última actualización: 16 de febrero de 2021</p>
              <p className="text-justify" className="text-justify">
                Esta Política de Privacidad describe Nuestras políticas y
                procedimientos sobre la recopilación, uso y divulgación de su
                información cuando utiliza el Servicio y le informa sobre Sus
                derechos de privacidad y cómo la ley lo protege. Utilizamos Sus
                datos personales para proporcionar y mejorar el Servicio. Al
                utilizar el Servicio, Usted acepta la recopilación y el uso de
                información de acuerdo con esta Política de Privacidad.
              </p>
              <p className="text-justify">
                Interpretación y definiciones Interpretación Las palabras de las
                que se pone en mayúsculas la letra inicial tienen significados
                definidos en las siguientes condiciones.{" "}
              </p>
              <p className="text-justify">
                Las definiciones a continuación tendrán el mismo significado,
                independientemente de si aparecen en singular o en plural.
                Definiciones a los efectos de esta Política de Privacidad:{" "}
              </p>
              <ul>
                <li>
                  Cuenta: significa una cuenta única creada para que Usted
                  acceda a nuestro Servicio o a partes de nuestro Servicio.
                </li>
                <li>
                  Affiliate: significa una entidad que controla, está controlada
                  por o está bajo control común con una parte, donde "control"
                  significa la propiedad del 50% o más de las acciones,
                  participaciones en acciones u otros valores con derecho a
                  votar por la elección de directores u otros authority
                  gerentes.
                </li>
                <li>
                  Aplicación: significa el programa de software proporcionado
                  por la Compañía descargado por Usted en cualquier dispositivo
                  electrónico, llamado “Streams for Labs”
                </li>
                <li>
                  La Empresa: (denominada "la Compañía", "Nosotros", "Nosotros"
                  o "Nuestro") se refiere a SFLF (Stream for Labs Foundation),
                  ubicada en Bucaramanga, Santander, Colombia
                </li>
                <li>
                  País: se refiere a: Colombia Dispositivo: significa cualquier
                  dispositivo que pueda acceder al Servicio, como una
                  computadora, un teléfono celular o una tableta digital.
                </li>
                <li>
                  Los Datos personales: son cualquier información que se
                  relaciona con una persona identificada o identificable.
                </li>
                <li>El servicio: se refiere a la aplicación.</li>
                <li>
                  Proveedor de servicios: se refiere a cualquier persona física
                  o jurídica que procese los datos en nombre de la Compañía. Se
                  refiere a terceras empresas o individuos empleados por la
                  Compañía para facilitar el Servicio, para proporcionar el
                  Servicio en nombre de la Compañía, para realizar servicios
                  relacionados con el Servicio o para ayudar a la Compañía en el
                  análisis de cómo se utiliza el Servicio.
                </li>
                <li>
                  El Servicio de Medios Sociales de terceros: se refiere a
                  cualquier sitio web o sitio web de redes sociales a través del
                  cual un Usuario pueda iniciar sesión o crear una cuenta para
                  utilizar elServicio. Los datos de uso: se refieren a los datos
                  recopilados automáticamente, generados por el uso del Servicio
                  o desde la propia infraestructura del Servicio (por ejemplo,
                  la duración de una visita a la página).
                </li>
                <li>
                  Usted: se refiere a la persona que accede o utiliza el
                  Servicio, o la empresa u otra entidad jurídica en nombre de la
                  cual dicha persona está accediendo o utilizando el Servicio,
                  según corresponda.
                </li>
              </ul>
              <p className="text-justify">Recopilación y uso de sus datos personales </p>
              <p className="text-justify">Tipos de datos recopilados</p>
              <p className="text-justify">
                Datos personales Durante el uso de Nuestro Servicio, es posible
                que le pidamos que nos proporcioneinformación de identificación
                personal que se pueda utilizar para contactarle o identificarlo.
                La información de identificación personal puede incluir, pero no
                se limita a:
              </p>
              <ul>
                <li>Dirección de correo electrónico</li>
                <li>Nombre y apellido</li>
                <li>Datos de uso</li>
              </ul>
              <p className="text-justify">Datos de uso</p>
              <p className="text-justify">
                Los Datos de uso se recopilan automáticamente al utilizar el
                Servicio. Los Datos de Uso pueden incluir información como la
                dirección del Protocolo de Internet de su Dispositivo (por
                ejemplo, dirección IP), tipo de navegador, versión del
                navegador, las páginas de nuestro Servicio que visita, la hora y
                fecha de Su visita, la cantidad de tiempo que invierte en esas
                páginas, identificadores únicos del dispositivo y otros datos de
                diagnóstico. Cuando accede al Servicio por o a través de un
                dispositivo móvil, podemos recopilar cierta información
                automáticamente, incluyendo, pero no limitado a, el tipo de
                dispositivo móvil que utiliza, su ID único de dispositivo de
                mobile, la dirección IP de su dispositivo móvil, su sistema
                operativo móvil, el tipo de navegador de Internet móvil que
                utiliza, identificadores de dispositivo únicos y otros datos de
                diagnóstico. También podemos recopilar información que Su
                navegador envía cada vez que visita nuestro Servicio o cuando
                accede al Servicio por o a través de un dispositivo móvil.
              </p>
              <p className="text-justify"> Información de servicios de redes sociales de terceros</p>
              <p className="text-justify">
                La Compañía le permite crear una cuenta e iniciar sesión para
                utilizar el Servicio a través de los siguientes servicios de
                Terceros:
              </p>
              <ul>
                <li>Office 365</li>
              </ul>
              <p className="text-justify">
                Si decide registrarse a través de un Servicio de Redes Sociales
                de Terceros o nos concede de otro modo, podemos recopilar datos
                personales que ya están asociados con la cuenta de Su Servicio
                de Medios Sociales de Terceros, como Su nombre, Su dirección de
                correo electrónico, Sus actividades o Su lista de contactos
                asociada a esa cuenta.
              </p>
              <p className="text-justify">
                También puede tener la opción de compartir información adicional
                con la Compañía a través de la cuenta de Su Servicio de Medios
                Sociales de Terceros. Si decide proporcionar dicha información y
                Datos personales, durante el registro o de otro modo, está dando
                a la Compañía permiso para usarlo, compartirlo y almacenarlo de
                manera consistente con esta Política de Privacidad.
              </p>
              <p className="text-justify">Uso de sus datos personales</p>
              <p className="text-justify">
                La Compañía puede utilizar Datos Personales para los siguientes
                fines:
              </p>
              <ul>
                <li>
                  Proporcionar y mantener nuestro Servicio, incluyendo
                  monitorear el uso de nuestro Servicio.
                </li>
                <li>
                  Gestionar Su Cuenta: para gestionar Su registro como usuario
                  del Servicio. Los Datos Personales que usted proporciona
                  pueden darle acceso a diferentes funcionalidades del Servicio
                  que están disponibles para Usted como usuario registrado. Para
                  ponerse en contacto con Usted:
                </li>
                <li>
                  Para ponerse en contacto con Usted por correo electrónico o
                  las notificaciones “push” de una aplicación móvil con respecto
                  a actualizaciones o comunicaciones informativas relacionadas
                  con las funcionalidades, productos o servicios contratados,
                  incluidas las actualizaciones de seguridad, cuando sea
                  necesario o razonable para su implementación.
                </li>
                <li>
                  Para gestionar sus solicitudes: Para atender y gestionar Sus
                  solicitudes a Nosotros.
                </li>
                <li>
                  Para otros fines: Podemos utilizar Su información para otros
                  fines, como el análisis de datos, la identificación de
                  tendencias de uso, la determinación de la eficacia de nuestras
                  campañas promocionales y para evaluar y mejorar nuestro
                  Servicio, productos, servicios, marketing y su experiencia.
                  Podemos compartir Su información personal en las siguientes
                  situaciones
                </li>
                <li>
                  Con los Proveedores de Servicios: Podemos compartir Su
                  información personal con los Proveedores de Servicios para
                  monitorear y analizar eluso de nuestroServicio, para ponernos
                  en contacto con Usted.
                </li>
                <li>
                  Con otros usuarios: cuando comparte información personalo
                  interactúa de otro modo en lasáreas públicas con otros
                  usuarios, dicha información puede ser vista por todos los
                  usuarios y puede ser distribuida públicamente fuera. Si
                  interactúa con otros usuarios o se registra a través de un
                  Servicio de Redes Sociales de Terceros, Sus contactos en el
                  Servicio de Medios Sociales de Terceros pueden ver Su nombre,
                  perfil, imágenes y videos.
                </li>
                <li>
                  Con su consentimiento: Podemos divulgar Su información
                  personal para cualquier otro propósito con su consentimiento.
                </li>
              </ul>
              <p className="text-justify">Retención de sus datos personales</p>
              <p className="text-justify">
                La Compañía conservará Sus Datos Personales solo durante el
                tiempo que sea necesario para los fines establecidos en esta
                Política de Privacidad. Conservaremos y utilizaremos Sus Datos
                personales en la medida necesaria para cumplir con nuestras
                obligaciones legales (por ejemplo, si estamos obligados a
                conservar sus datos para cumplir con las leyes aplicables),
                resolver disputas y hacer cumplir nuestros acuerdos y políticas
                legales. Company también conservará los datos de uso para fines
                de análisis interno. Los Datos de Uso generalmente se conservan
                por un período de tiempo más corto, excepto cuando estos datos
                se utilizan para fortalecer la seguridad o para mejorar la
                funcionalidad de Nuestro Servicio, o estamos legalmente
                obligadosa retener estos datos durante períodos de tiempo más
                largos.
              </p>
              <p className="text-justify">Transferencia de sus datos personales</p>
              <p className="text-justify">
                Su información, incluidos los Datos personales, se procesa en
                las oficinas operativas de la Compañía y en cualquier otro lugar
                donde se encuentren las partes involucradas en el procesamiento.
                Es decir, que esta información pueda ser transferida y mantenida
                en computadoras ubicadas fuera de Su estado, provincia, país u
                otra jurisdicción gubernamental donde las leyes de protección de
                datos pueden diferir de las de Su jurisdicción. Su
                consentimiento para esta Política de Privacidad seguida de Su
                envío de dicha información representa Su acuerdo con esa
                transferencia. La Compañía tomará todas las medidas
                razonablemente necesarias para garantizar que Sus datos sean
                tratados de forma segura y de acuerdo con esta Política de
                Privacidad, yno se realizará ninguna transferencia de Sus Datos
                Personales a una organización o un país a menos que existan
                controles adecuados, incluida la seguridad de Sus datos y otra
                información personal.
              </p>
              <p className="text-justify"> Divulgación de sus datos personales</p>
              <p className="text-justify">
                Transacciones comerciales Si la Compañía está involucrada en una
                fusión, adquisición o venta de activos, Sus Datos Personales
                pueden ser transferidos. Le notificaremos antes de que sus datos
                personales se transfieran y estén sujetos a una Política de
                privacidad diferente.
              </p>
              <p className="text-justify">Aplicación de la ley</p>
              <p className="text-justify">
                Bajo cierta situación, la Compañía puede estar obligada a
                divulgar Sus Datos Personales si así lo requiere la ley o en
                respuesta a solicitudes válidas de las autoridades públicas (por
                ejemplo, un tribunal o una agencia gubernamental).
              </p>
              <p className="text-justify">Otros requisitos legales</p>
              <p className="text-justify">
                La Compañía puede divulgar Sus Datos Personales en la creencia
                de buena fe de que dicha acción es necesaria para:
              </p>
              <ul>
                <li>Cumplir con una obligación legal</li>
                <li>
                  Proteger y defender los derechos la propiedad de la Compañía
                </li>
                <li>
                  {" "}
                  Prevenir o investigar posibles irregularidades en relación con
                  el Servicio
                </li>
                <li>
                  Proteger la seguridad personal del Usuario del Servicio o del
                  público
                </li>
                <li>Proteger contra la responsabilidad legal</li>
              </ul>
              <p className="text-justify">Seguridad de sus datos personales </p>
              <p className="text-justify">
                {" "}
                La seguridad de Sus Datos Personales es importante para
                Nosotros, pero recuerde que ningún método de transmisión a
                través de Internet, o método de almacenamiento electrónico es
                100% seguro. Aunque nos esforzamos por utilizar medios
                comercialmente aceptables para proteger Sus Datos personales, no
                podemos garantizar su seguridad absoluta.
              </p>
              <p className="text-justify">Privacidad de los niños</p>
              <p className="text-justify">
                Nuestro Servicio no se dirige a menores de 13 años. No
                recopilamos a sabiendas información de identificación personal
                de ninguna persona menor de 13 años. Si usted es un padre o
                tutor y sabe que su hijo nos ha proporcionado datos personales,
                póngase en contacto con nosotros. Si nos damos cuenta de que
                hemos recopilado Datos personales de cualquier persona menor de
                13 años sin verificación del consentimiento de los padres,
                tomamos medidas para eliminar esa información de Nuestros
                servidores. Si necesitamos confiar en el consentimiento como
                base legal para procesar Su información y Su país requiere el
                consentimiento de un padre, podemos requerir el consentimiento
                de los padres antes de recopilar y usar esa información.
              </p>
              <p className="text-justify">Enlaces a otros sitios web </p>
              <p className="text-justify">
                Nuestro Servicio puede contener enlaces a otros sitios web que
                no son operados por Nosotros. Si hace clic en un enlace de
                terceros, se le dirigirá al sitio de ese tercero. Lerecomendamos
                encarecidamente que revise la Política de privacidad de cada
                sitio que visite. No tenemos control ni asumimos ninguna
                responsabilidad por el contenido, las políticas de privacidad o
                las prácticas de los sitios o servicios de terceros.
              </p>
              <p className="text-justify">Cambios en esta Política de Privacidad</p>

              <p className="text-justify">
                Podemos actualizar Nuestra Política de Privacidad de vez en
                cuando. Le notificaremos de cualquier cambio publicando la nueva
                Política de Privacidad en esta página. Le informaremos por
                correo electrónico y/o un aviso destacado en nuestro Servicio,
                antes de que el cambio entre en vigor y actualizaremos la fecha
                de "Última Actualización" en la parte superior de esta Política
                de privacidad. Se recomienda revisar esta Política de Privacidad
                periódicamente para cualquier cambio. Los cambios a esta
                Política de Privacidad son efectivos cuando se publican en esta
                página.
              </p>
              <p className="text-justify">Contáctenos </p>
              <p className="text-justify">
                Si tiene alguna pregunta sobre esta Política de privacidad,
                puede ponerse en contacto con nosotros:
              </p>
              <ul>
                <li>
                  Por correo electrónico: deiver.guerra.2017@upb.edu.co
                </li>
                <li>
                  {" "}
                  Por correo electrónico: carlos.bejarano.2017@upb.edu.co
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={acceptPolicy}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
