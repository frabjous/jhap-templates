// LICENSE: GNU GPL v3 You should have received a copy of the GNU General
// Public License along with this program. If not, see
// https://www.gnu.org/licenses/.

// File: customemail.mjs
// Defines a function imported by the open guide typesetting framework for
// sending email from the server

import {azureSend} from '../../../http/serveremail/azureEmail.mjs';

const emailFootnote =
  '\r\n<p></p><p style="font-size: 80%; font-style: italic;">' +
  '\r\n<strong>Please note</strong>: ' +
  '\r\nThis email was auto-generated by the JHAP typesetting framework ' +
  '\r\nand not written directly by me personally. ' +
  '\r\nBut a reply should still reach me, and if needed, I can pass ' +
  '\r\nalong a message to the appropriate people! –Kevin</p>\r\n';

export default async function customMailer(emailto, subject, contents, contact) {
  return await azureSend({
    from: contact,
    to: emailto,
    html: contents + emailFootnote,
    subject
  });
}
